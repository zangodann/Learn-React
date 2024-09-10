import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples (){
  const topics = [
    { title: 'components', content: 'Component' },
    { title: 'jsx', content: 'JSX' },
    { title: 'props', content: 'Props' },
    { title: 'state', content: 'State' }
  ];
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
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            {topics.map(topic =>(
              <TabButton
                key={topic.title} 
                isSelected={selectedTopic === topic.title}
                onClick={() => handleSelect(topic.title)}
              >
              {topic.content}  
              </TabButton>
            ))}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}