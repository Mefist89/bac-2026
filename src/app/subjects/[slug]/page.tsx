export default async function SubjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold capitalize">{slug}</h1>
      <p className="mt-4">List of lessons for {slug} will appear here.</p>
    </div>
  );
}
