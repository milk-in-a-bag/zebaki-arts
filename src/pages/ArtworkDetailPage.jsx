import ArtworkDetailHeader from "../components/headers/ArtworkDetailHeader";
import ArtworkDetailFooter from "../components/footers/ArtworkDetailFooter";
import Breadcrumbs from "../components/artworkDetail/Breadcrumbs";
import MediaGallery from "../components/artworkDetail/MediaGallery";
import DetailsSidebar from "../components/artworkDetail/DetailsSidebar";
import ArtistStory from "../components/artworkDetail/ArtistStory";
import RelatedArtworks from "../components/artworkDetail/RelatedArtworks";

export default function ArtworkDetailPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0e10] dark:text-white transition-colors duration-300">
      <ArtworkDetailHeader />
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <Breadcrumbs />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <MediaGallery />
          <DetailsSidebar />
        </div>
        <ArtistStory />
        <RelatedArtworks />
      </main>
      <ArtworkDetailFooter />
    </div>
  );
}
