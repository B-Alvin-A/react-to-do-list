const Footer = ({length}) => {
    const today = new Date()
  return (
    <footer className="w-full flex flex-col items-center justify-center px-1 bg-[#2f2f89] text-[aliceblue]">
        {length===0 ?
        ""
        :
        <p>{length} List Item{length!==1?'s':''}</p>
        }
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer