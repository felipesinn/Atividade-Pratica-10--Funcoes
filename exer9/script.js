
        function  calMedia(nota1, nota2, nota3, nome) {
            const media = (nota1 + nota2 + nota3) / 3;
            alert(`${nome}, sua média é ${media.toFixed(2)}.`);
            
            console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`);
        }
        const nota1 = 90;
        const nota2 = 50;
        const nota3 = 60;
        const nomeAluno = "Lucas";
        
        calMedia(nota1, nota2, nota3, nomeAluno);