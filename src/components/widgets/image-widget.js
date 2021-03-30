  import React from 'react'

const ImageWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            <h2>Image Widget</h2>
            {
                !editing && 

                <div>
                    <img src={widget.url} alt={widget.text} width={widget.width} height={widget.height}></img>
                </div>

            }

            {
                editing &&
                    <div>
                        URL
                        <input defaultValue={widget.url} onChange={(e) => setWidget(widget =>
                        ({...widget, url : e.target.value}))} className="form-control"/>
                        width
                        <input defaultValue={widget.width} onChange = {(e) => setWidget(widget =>
                        ({...widget, width : e.target.value}))} className="form-control"/>
                        height
                        <input defaultValue={widget.height} onChange = {(e) => setWidget(widget =>
                        ({...widget, height : e.target.value}))} className="form-control"/>
                    </div>
                    
            }
        </div>
    )
}

export default ImageWidget