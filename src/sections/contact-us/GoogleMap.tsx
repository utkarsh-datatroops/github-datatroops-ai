"use client";

export default function GoogleMap() {
  return (
    <section className="w-full h-64 md:h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3149778134416!2d76.69241097642879!3d30.709544374595556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8277432963%3A0x39ad7d4bbdc8b2b2!2sDataTroops!5e0!3m2!1sen!2sin!4v1749816824155!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </section>
  );
}
