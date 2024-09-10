import { useState } from 'react';
import { CORE_CONCEPTS , EXAMPLES} from './data.js';
import CoreConcept from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';

// npm run dev

function App() {
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

  return (
    <div>
      <Header/> 
      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>(
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>

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
      </main>
    </div>
  );
}

export default App;
