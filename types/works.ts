import { EntrySkeletonType } from "contentful";

interface WorkExperienceFields extends EntrySkeletonType {
  fields: {
    company: string;
    company_description: string;
    position: string;
    position_type: string;
    responsibility: string[] | undefined;
    achievements: string[] | undefined;
    started_at: string;
    ended_at: string;
  };
  contentTypeId: "workExperience";
}
