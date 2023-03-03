import axios from 'axios'

const getProjectsFromAPI = async (access_token) => {

    const headers = { 'Authorization': `Bearer ${access_token}` };

    // Set up the API endpoint for jobs and projects
    const jobs_endpoint = 'https://api.linkedin.com/v2/jobs';
    const jobs_params = { 'q': 'creator', 'creator': 'urn:li:person:me' };

    // Retrieve jobs
    axios.get(jobs_endpoint, { headers, params: jobs_params })
    .then(response => {
        // Extract the jobs from the JSON response
        const jobs = response.data.elements;

        // Print the jobs
        console.log('My Jobs:');
        jobs.forEach(job => console.log(job.title));
    })
    .catch(error => {
        console.error('Error retrieving jobs:', error);
    });

    // Set up the API endpoint for projects
    const projects_endpoint = 'https://api.linkedin.com/v2/projects';
    const projects_params = { 'q': 'owner', 'owner': 'urn:li:person:me' };

    // Retrieve projects
    axios.get(projects_endpoint, { headers, params: projects_params })
    .then(response => {
        // Extract the projects from the JSON response
        const projects = response.data.elements;

        // Print the projects
        console.log('\nMy Projects:');
        projects.forEach(project => console.log(project.title));
    })
    .catch(error => {
        console.error('Error retrieving projects:', error);
    });
}
export default getProjectsFromAPI