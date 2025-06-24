export const Gallery = () => {
  const images = [
    "/images/scene1.jpg",
    "/images/scene2.jpg",
    "/images/scene3.jpg",
  ];
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Scene"
          className="rounded-2xl shadow-lg hover:scale-105 transition"
        />
      ))}
    </section>
  );
};
