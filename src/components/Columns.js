import React from 'react'

function Columns() {

const items = [];

  return (
    <React.Fragment>
{/* React.Fragment Tag can be replaced with <></> tag but then you can't pass key attribute to it */}
        {
            items.map((item) => (
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
      <td>Name</td>
      <td>Menkalinan</td>
    </React.Fragment>
  )
}

export default Columns
