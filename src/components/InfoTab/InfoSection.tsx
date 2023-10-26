type IInfoSection = {
  title: string, 
  info: string
}

const InfoSection = ({title, info}: IInfoSection) => {
  return (
    <>
       <h3 className="mt-6 text-4xl">{title}</h3>
        <p className="mt-6">{info}</p>
    </>
  )
}

export default InfoSection;