export default function Card({
  id,
  title,
}: {
  id: string,
  title: string,
}) {
  return (
    <>
    <div className="mx-4 size-48 bg-gray-200 border">
      {title}
    <textarea id={id} className="text-black"></textarea>
    </div>
    </>
  )
}