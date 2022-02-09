export const tempoParaSegundos = (tempo: string): number => {
    const [horas = '0', minutos = '0', segundos = '0']: string[] = tempo.split(':');

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegudos = Number(minutos) * 60;
    
    return horasEmSegundos + minutosEmSegudos + Number(segundos);
}