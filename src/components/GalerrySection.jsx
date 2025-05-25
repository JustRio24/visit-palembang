export function GallerySection() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/images/gallery/bg_ampera.jpg"
            alt="gallery-photo"
            title="Ampera Bridge"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="/images/gallery/kemaroisland.jpg"
            alt="gallery-photo"
            title="Kemaro Island"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/images/gallery/Pempek.jpeg"
            alt="gallery-photo"
            title="Pempek"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/images/gallery/Pagoda.jpg"
            alt="gallery-photo"
            title="Pagoda"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/images/gallery/Pindang Patin.jpg"
            alt="gallery-photo"
            title="Pindang Patin"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="/images/gallery/SekanakRiver.jpg"
            alt="gallery-photo"
            title="Sekanak Riverside"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/images/gallery/TuguBelido.jpg"
            alt="gallery-photo"
            title="Tugu Belido"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="/images/gallery/bukitsiguntang.jpg"
            alt="gallery-photo"
            title="Bukit Siguntang"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/images/gallery/Monpera.jpeg"
            alt="gallery-photo"
            title="Monpera"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/images/gallery/musiriver.jpeg"
            alt="gallery-photo"
            title="Musi River"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="/images/gallery/musibercorak.jpg"
            alt="gallery-photo"
            title="Musi bercorak"
          />
        </div>
      </div>
    </div>
  );
}
