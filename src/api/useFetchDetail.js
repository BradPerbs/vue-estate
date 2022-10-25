import { ref } from "vue";
// import axios from "axios";
import settingsData from "@/api/settingsData.json";

// const url = "https://realty-in-us.p.rapidapi.com/properties/detail"

export async function useFetchDetail(propertyId) {
  const propertyFullContents = ref([]);
  const error = ref(null);

  console.log("From useFetchDetail:", propertyId);
  propertyFullContents.value = [...settingsData.detailedProperty[0].properties];

  // try {
  //   const response = await axios.get(url, {
  //     params: {
  //       property_id: `${propertyId}`
  //     },
  //     headers: {
  //       "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
  //       "X-RapidAPI-Key": `${process.env.VUE_APP_RAPID_API_KEY}`
  //     }
  //   });
  //   const {
  //     data: { listing }
  //   } = response;
  //   propertyFullContents.value = listing;
  //   console.log("Detailed Properties fetched:", propertyFullContents.value);
  // } catch (err) {
  //   console.error(err);
  //   error.value = err;
  // } finally {
  //   console.log("Fetching is completed")
  // }
  return {
    propertyFullContents,
    error,
  };
}
