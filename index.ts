import './style.css';
import { Data } from './data';
import { Serie } from './serie';

const seriesTbody: HTMLElement = document.getElementById('series')!;
function SeriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    const trElement = document.createElement('tr');
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
}
function promedio(series: Serie[]): number {
  let totalTemporadas: number = 0;
  series.forEach((serie) => (totalTemporadas += serie.temporadas));
  return totalTemporadas / series.length;
}
function promediointable(series: Serie[]): void {
  const trElement = document.createElement('tr');
  trElement.innerHTML = `<td colspan="3"><strong>Promedio de Temporadas</strong></td>
                         <td><strong>${promedio(series).toFixed(
                           2
                         )}</strong></td>`;
  seriesTbody.appendChild(trElement);
}
SeriesInTable(Data);
promediointable(Data);
