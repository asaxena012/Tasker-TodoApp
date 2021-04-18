import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

export default function LoaderTasker({ text }) {
  return (
    // <div>
    //   <Segment>
    //     <Dimmer active inverted>
    //       <Loader inverted>Loading</Loader>
    //     </Dimmer>

    //     <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    //   </Segment>
    // </div>
    <div>
      <Loader active inline="centered" size="big">
        {text}
      </Loader>
    </div>
  );
}
