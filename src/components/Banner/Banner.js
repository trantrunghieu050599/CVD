import React from "react"
import BannerCaseStudy from "./BannerCaseStudy"
import BannerProjects from "./BannerProjects"
import BannerWhatWeDo from "./BannerWhatWeDo"
import BannerStyleguide from "./BannerStyleguide"

function Banner({
  location,
  listCategoryOurWork,
  nameProject,
  logoProject,
  nameCategoryOfWorkItem,
  descriptionOfWorkItem,
  backgroundWorkItemSrc,
  backgroundWorkItemAlt,
}) {
  switch (location) {
    // case "/":
    //   return <BannerHome />
    case "/":
      return ""
    case "/projects":
      return <BannerProjects listCategoryOurWork={listCategoryOurWork} />

    case "/case-study":
      return (
        <BannerCaseStudy
          nameProject={nameProject}
          logoProject={logoProject}
          nameCategoryOfWorkItem={nameCategoryOfWorkItem}
          descriptionOfWorkItem={descriptionOfWorkItem}
          backgroundWorkItemSrc={backgroundWorkItemSrc}
          backgroundWorkItemAlt={backgroundWorkItemAlt}
        />
      )
    case "/what-we-do":
      return <BannerWhatWeDo />
    case "/styleguide":
      return <BannerStyleguide />
    default:
      return ""
  }
}
export default Banner
