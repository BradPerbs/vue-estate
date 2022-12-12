import { ref } from "vue";
import axios from "axios";
// import settingsData from "@/api/settingsData.json";

const url = "https://realty-in-us.p.rapidapi.com/properties/detail"

export async function useFetchDetail(propertyId) {
  const propertyFullContents = ref([]);
  const errorFetch = ref({});

  // console.log("From useFetchDetail propertyId:", propertyId);
  // propertyFullContents.value = [...settingsData.detailedProperty[0].properties];

  try {
    errorFetch.value = {};
    const response = await axios.get(url, {
      params: {
        property_id: `${propertyId}`
      },
      headers: {
        "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
        "X-RapidAPI-Key": `${process.env.VUE_APP_RAPID_API_KEY}`
      }
    });
    const {
      data: { listing }
    } = response;
    propertyFullContents.value = listing;
    console.log("====///The detailed\\\\:", response);
  } catch (err) {
    console.error(err);
    errorFetch.value.isError = true;
    errorFetch.value.description = err;
  } finally {
    console.log("Fetching is completed")
  }
  return {
    propertyFullContents,
    errorFetch,
  };
}
