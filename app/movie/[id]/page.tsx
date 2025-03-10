import BackButton from "@/components/back-button";
import MovieDetails from "@/components/movie-details";

interface MovieDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  return (
    <main>
      <BackButton />
      <MovieDetails params={params} />
    </main>
  );
}
