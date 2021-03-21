import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, setWidget, editing}) => {
    return (
        <div>

        {/* <h2>Paragraph Widget {widget.id}</h2> */}


            {
                editing &&
                <div>
                    <textarea
                        rows="4"
                        columns="50"
                        onChange={(e) => setWidget({...widget, text: e.target.value})}
                        defaultValue={widget.text}
                        className="form-control mb-2">                
                    </textarea>
                    <select onChange={(e) => setWidget(widget => ({...widget, type: e.target.value}))} defaultValue={widget.type} className="form-control">
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                    </select>
                </div>
            }
            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }
        </div>
    )
}

export default ParagraphWidget