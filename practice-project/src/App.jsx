import { useState } from "react";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoFileSelected from './components/NoProjectSelected';

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleStartAddProject(){
    setProjectState(prevProjectState =>{
      return{
        ... prevProjectState,
        selectedProjectId: null
      }
    });
  }

  function handleCancelAddProject(){
    setProjectState(prevProjectState =>{
      return{
        ... prevProjectState,
        selectedProjectId: undefined
      }
    });
  }

  function handleSelectProject(id){
    setProjectState(prevProjectState =>{
      return{
        ... prevProjectState,
        selectedProjectId: id
      }
    });
  }

  function handleAddProject(projectData){
    setProjectState(prevState =>{
      const projectId = Math.random();
      const newProject ={
        ...projectData,
        id: projectId
      };
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleDelete(){
    setProjectState(prevProjectState =>{
      return{
        ... prevProjectState,
        selectedProjectId: undefined,
        projects: prevProjectState.projects.filter((project) => project.id !== prevProjectState.selectedProjectId)
      }
    });
  }

  function handleAddTask(text){
    setProjectState(prevState =>{
      const taskId = Math.random();
      const newTask ={
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks ]
      };
    });
  }

  function handleDeleteTask(id){
    setProjectState(prevProjectState =>{
      return{
        ... prevProjectState,
        tasks: prevProjectState.tasks.filter((task) => task.id !== id)
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  const selectedProjectTasks = projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId);

  let content = (
    <SelectedProject 
      project={selectedProject} 
      onDelete={handleDelete} 
      onAddTask={handleAddTask} 
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjectTasks}
    />
  );

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
  }
  else if(projectsState.selectedProjectId ===  undefined){
    content = <NoFileSelected onStartAddProject={handleStartAddProject}/>;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects} 
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
