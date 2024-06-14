

export const Tools = () => {
    const tools= ["Technology","Design", "Artificial Intelligence", "AI Chat Bot", "Customizable", "3d Model", "People", "Create Videos", "Analyze", "Outfits", "Voice Chat", "Marketing"]
  return (
    <div className="tools-container">
        {tools.map((item,index)=> <p key={index} className="tool-items">{item}</p>)}
    </div>
  )
}
