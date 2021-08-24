const planets = document.querySelectorAll('.planet');

const orbital_radius = [11,16,25,35,56,69,82,95]
const planets_speed = [1.607, 1.174,1, 0.802, 0.434, 0.323, 0.228, 0.182];
let planets_theta = [0, 0, 0, 0, 0, 0, 0, 0];

const planets_orbits = document.querySelectorAll('.orbit');
const moon_orbit = document.querySelector('.moon_orbit');

planets_orbits.forEach((planet_orbit,index)=>{
    planet_orbit.style.height = (orbital_radius[index]) + 'vmin';
    planet_orbit.style.width = (orbital_radius[index])+ 'vmin';
})

const moon = document.querySelector('.moon');
const moon_orbital_radius = 6;
let moon_theta = 0;
const moon_speed = 10;



setInterval(()=>{
  planets.forEach((planet,index)=>{
    planet.style.left = Math.cos(planets_theta[index]) * (orbital_radius[index]) + 'vmin';
    planet.style.top = Math.sin(planets_theta[index]) * (orbital_radius[index]) + 'vmin';
    planets_theta[index]+=planets_speed[index]*0.02;
  })

  moon.style.left = earthX() + (Math.cos(moon_theta)*moon_orbital_radius)+'vmin';
  moon.style.top = earthY() + (Math.sin(moon_theta)*moon_orbital_radius)+'vmin';
  moon_theta+=moon_speed * 0.02;

  moon_orbit.style.left = earthX() + 'vmin';
  moon_orbit.style.top = earthY() +'vmin';

},1000/60)

function earthX(){
    return Number (planets[2].style.left.split('vmin')[0]);
}

function earthY(){
    return Number (planets[2].style.top.split('vmin')[0]);
}