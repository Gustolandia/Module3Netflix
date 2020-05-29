const url = "https://striveschool.herokuapp.com/api/movies/";

const getEvents = async () => {
  let response = await fetch(url, {
    method: "GET",
    headers:{
        "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
    }
  }); // this is getting the response from the API fetching
  return await response.json(); // this is returning the result of the promise in an usable format
};
const getMovies = async (cat) => {
  let response = await fetch(url+cat, {
    method: "GET",
    headers:{
        "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
    }
  }); // this is getting the response from the API fetching
  return await response.json(); // this is returning the result of the promise in an usable format
};

const saveEvent = async (agendaEvent) => {
  console.log(JSON.stringify(agendaEvent));
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(agendaEvent),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Basic ${window.btoa("user13:6c#k#ANpA&k^s3t2")}`,
    }),
  });
  return response;
};

const getEvent = async (id) => {
  let response = await fetch(url+"id/" + id, {
    method: "GET",
    headers:{
        "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
    }
  });
  return await response.json();
};

const editEvent = async (id, agendaEvent) => {
  let response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(agendaEvent),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
    }),
  });
  return response;
};

const deleteEvent = async (id) => {
  let response = await fetch(url + id, {
    method: "DELETE",
    headers: {
    "Authorization": "Basic "+btoa("user13:6c#k#ANpA&k^s3t2"),
    }
  });
  return response;
};