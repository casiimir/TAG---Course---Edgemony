import { useState, useEffect, useRef } from "react";
import { GET } from "../utils/http";

export const useCamera = () => {
  const [constraints, setContraints] = useState({
    audio: false,
    video: { width: 396, height: 1080 },
  });

  const [setFilterState] = useState("");
  const [setRangeInput] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
        };
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }, []);

  // const onSetFilterState = (state) => setFilterState(state);

  const onStopVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;

    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => track.stop());

    setTimeout(() => {
      videoRef.current.srcObject = null;
    }, 1);
  };

  return {
    onStopVideo,
    setContraints,
    videoRef,
  };
};

export const useDummyJson = (endpoint, listTitle) => {
  const [productList, setProductList] = useState({});

  useEffect(() => {
    GET(endpoint).then((data) => setProductList(data));
  }, []);

  const onFilterCategory = () => {
    return productList?.products?.filter(
      (product) => product.category === listTitle.toLowerCase()
    );
  };

  return {
    productList,
    onFilterCategory,
  };
};
