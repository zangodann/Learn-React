import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';

export default function Examples (){
  const topics = [
    {
      title: 'components',
      content: 'Component'
    },
    {
      title: 'jsx',
      content: 'JSX'
    },
    {
      title: 'props',
      content: 'Props'
    },
    {
      title: 'state',
      content: 'State'
    }];
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton){ 
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic){
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return(
    <section id="examples">
          <h2>Examples</h2>
          <menu>
            {
              topics.map(topic =>(
                <TabButton
                  key={topic.title} 
                  isSelected={selectedTopic === topic.title}
                  onSelect={() => handleSelect(topic.title)}
                >
                {topic.content}  
                </TabButton>
              ))
            }
          </menu>
          {tabContent}
        </section>
  );
}