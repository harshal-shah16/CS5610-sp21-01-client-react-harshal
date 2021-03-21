import React from 'react'

const HeadingWidget = ({widget, setWidget, editing}) =>
    <div>
        {
        !editing &&
        <div>
            { widget.size ===1 && <h1>{widget.text}</h1>}
            { widget.size ===2 && <h2>{widget.text}</h2>}
            { widget.size ===3 && <h3>{widget.text}</h3>}
            { widget.size ===4 && <h4>{widget.text}</h4>}
            { widget.size ===5 && <h5>{widget.text}</h5>}
            { widget.size ===6 && <h6>{widget.text}</h6>}
        </div>
        }
        {
            editing &&
            <div>
                <select onChange={(e) => setWidget(widget => ({...widget, type: e.target.value}))} defaultValue={widget.type} className="form-control">
                    <option value="HEADING">Heading</option>
                    <option value="PARAGRAPH">Paragraph</option>
                </select>
                <br/>
                <input onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))} defaultValue={widget.text} className="form-control"/>
                <br/>
                <select onChange={(e) => setWidget(widget => ({...widget, size: parseInt(e.target.value)}))} defaultValue={widget.size} className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
                
            </div>
        }
    </div>

export default HeadingWidget