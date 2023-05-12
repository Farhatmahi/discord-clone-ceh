import { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { createGifMessage } from "../../../firebase";
import { setSendGifOpen } from "../../features/sendGif";
import { useServersState } from "../../features/servers";
import { useUserState } from "../../features/user";
import { useAppDispatch } from "../../redux/hooks";
import Image from "next/image";

interface GifData {
  content_description: string;
  id: string;
  url: string;
  media: [
    {
      loopedmp4: {
        url: string;
      };
    }
  ];
}

interface CategoryData {
  image: string;
  path: string;
  searchterm: string;
}

export default function SendGif() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<GifData[] | null>(null);
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const { server, channel } = useServersState();
  const { user } = useUserState();
  const inputRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!searchInput) return setSearchResults(null);
    const url = `https://g.tenor.com/v1/search?q=${searchInput}&key=${process.env.NEXT_PUBLIC_TENOR_API_KEY}&limit=8&contentfilter=${server.contentFilter}`;
    fetchGifs(url);
  }, [searchInput]);

  useEffect(() => {
    if (searchResults) return;
    fetchCategories();
  }, [searchResults]);

  async function fetchGifs(url: string) {
    const fetchedGifs = await fetch(url);
    const gifsData = await fetchedGifs.json();
    setSearchResults(gifsData.results);
  }

  async function fetchCategories() {
    const baseURL = `https://g.tenor.com/v1/categories?&key=${process.env.NEXT_PUBLIC_TENOR_API_KEY}&limit=8&contentfilter=${server.contentFilter}`;
    const fetchedGifs = await fetch(baseURL);
    const gifsData = await fetchedGifs.json();
    setCategories(gifsData.tags);
  }

  function closeWindow() {
    dispatch(setSendGifOpen(false));
  }

  function stopPropagation(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  function sendGif(url: string) {
    createGifMessage(server.serverID, channel.channelID, user.userID, url);
    closeWindow();
  }

  async function openCategory(category: string) {
    const url = `https://g.tenor.com/v1/search?q=${category}&key=${process.env.NEXT_PUBLIC_TENOR_API_KEY}&limit=8&contentfilter=${server.contentFilter}`;

    await fetchGifs(url);

    if (!inputRef.current) return;
    setSearchInput(category);
    inputRef.current.value = category;
  }

  return (
    <Backdrop onClick={closeWindow}>
      <Container onClick={stopPropagation}>
        <GifPicker>
          <Header>
            <GifSearchContainer>
              <GifSearch
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchInput(e.target.value)
                }
                ref={inputRef}
                type="text"
                placeholder="Search Tenor"
              />
            </GifSearchContainer>
          </Header>

          <ContentContainer style={{ scrollbarWidth: "thin" }}>
            <GifContainer>
              {!searchResults
                ? categories &&
                  categories.map((result, index) => {
                    const url = result.image;

                    return (
                      <CategoryContainer
                        onClick={() => openCategory(result.searchterm)}
                        key={index}
                      >
                        <CategoryBackdrop />
                        <CategoryText>{result.searchterm}</CategoryText>
                        <GifCategory
                          loader={() => url}
                          src={url}
                          width={231}
                          height={110}
                          unoptimized
                        />
                      </CategoryContainer>
                    );
                  })
                : searchResults.map((result) => {
                    const url = result.media[0].loopedmp4.url;

                    return (
                      <Gif
                        onClick={() => sendGif(url)}
                        src={url}
                        autoPlay
                        loop
                        preload="auto"
                        key={result.id}
                      />
                    );
                  })}
            </GifContainer>
          </ContentContainer>
        </GifPicker>
      </Container>
    </Backdrop>
  );
}

const Backdrop = tw.div`
  absolute w-full h-full z-50
`;

const Container = tw.section`
  absolute right-4 bottom-0 w-[498px] h-[498px] bg-gray-100 rounded-lg drop-shadow-lg
  dark:bg-dark-200
`;

const GifPicker = tw.div`
  flex flex-col pt-4 w-full h-full
`;

const Header = tw.header`
  px-4 pb-3 h-[46px] shadow-[0_1px_0_0_rgba(185,187,190,0.3)]
  dark:shadow-[0_1px_0_0_rgba(24,25,28,0.3),0_1px_2px_0_rgba(24,25,28,0.3)]
`;

const GifSearchContainer = tw.div`
  flex w-full h-[34px] bg-gray-200 rounded-middle
  dark:bg-dark-400 dark:text-text-tertiary
`;

const GifSearch = tw.input`
  w-full h-[30px] m-px px-2 bg-transparent placeholder-gray-500 outline-none
`;

const ContentContainer = tw.div`
  relative w-full h-full p-[11px] overflow-hidden
  hover:overflow-y-scroll
`;

const GifContainer = tw.div`
  absolute flex flex-wrap gap-3
`;

const CategoryContainer = tw.div`
  relative w-[231px] h-[110px] rounded-[5px] cursor-pointer
  hover:outline hover:outline-2 hover:outline-primary hover:drop-shadow-md
`;

const CategoryBackdrop = tw(Backdrop)`
  absolute bg-black/[0.4] rounded-[5px]
`;

const CategoryText = tw.span`
  absolute w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold z-50
`;

const GifCategory = tw(Image)`
  object-cover rounded-[5px]
`;

const Gif = tw.video`
  w-[231px] h-fit rounded-[5px] object-cover cursor-pointer
  hover:outline hover:outline-2 hover:outline-primary hover:drop-shadow-md
`;
