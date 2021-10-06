import Image from 'next/image';

export default function LazyLoading() {
  return (
    <div className="container">
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~1.9mb */}
      <Image
        src="/sunset1.jpg" 
        alt="Sunset" 
        width={600} 
        height={450} 
        layout="responsive"
      />
      
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~2.3mb */}
      <Image 
        src="/mountains1.jpg" 
        alt="Mountains" 
        width={600} 
        height={450} 
        layout="responsive"
      />

      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~1.9mb */}
      <Image 
        src="/sunset2.jpg" 
        alt="Sunset" 
        width={600} 
        height={450} 
        layout="responsive"
      />
      
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~2.3mb */}
      <Image 
        src="https://sherpas-uploads.s3.eu-west-3.amazonaws.com/Snapseed520582020--NaN_125_119_539.jpeg"
        alt="Mountains" 
        width={600} 
        height={450} 
        layout="responsive"
        priority={true}
      />
    </div>
  )
}
