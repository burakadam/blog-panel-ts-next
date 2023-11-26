'use client';

import { FC } from 'react';
import {
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  Divider,
  Editor,
  EditorComposer,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  ToolbarPlugin,
  UnderlineButton,
} from 'verbum';

import './styles.css';

const TextEditor: FC = () => {
  //   const [editorState, setEditorState] = useState();

  //   const handleChange = (content: any) => setEditorState(content);

  return (
    <div className='overflow-hidden rounded-sm shadow-sm max-w-[1000px]'>
      <EditorComposer>
        <Editor
          hashtagsEnabled={true}
          placeholder='Some blog thing!!'
          //   onChange={handleChange}
        >
          <ToolbarPlugin defaultFontSize='16px'>
            <FontSizeDropdown />
            <Divider />
            <BoldButton />
            <ItalicButton />
            <UnderlineButton />
            <CodeFormatButton />
            <InsertLinkButton />
            <TextColorPicker />
            <BackgroundColorPicker />
            <TextFormatDropdown />
            <Divider />
            <InsertDropdown enablePoll={true} />
            <Divider />
            <AlignDropdown />
          </ToolbarPlugin>
        </Editor>
      </EditorComposer>
    </div>
  );
};

export { TextEditor };
