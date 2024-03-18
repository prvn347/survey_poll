import { useRecoilValue } from "recoil";
import { surveysAtom } from "../store/atoms";

const SurveyFeed = useRecoilValue(surveysAtom)
export function addSurveyToFeed(newSurvey: any) {
    // Add the new survey to the top of the feed
    // @ts-ignore
    SurveyFeed.unshift(newSurvey);
}

// Function to get the current survey feed
export function getSurveyFeed() {
    return SurveyFeed;
}