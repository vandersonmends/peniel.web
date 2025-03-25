import React, { useState } from 'react';
import Img from '../../assets/imagens/img.jpg';
import IconLocalizacao from '../../assets/imagens/iconLocalizacao.png';
import IconCalendar from '../../assets/imagens/iconCalendario.png';
import IconRelogio from '../../assets/imagens/iconRelogio.png';
import 'animate.css';

const celulas = [
  {
    nome: "Célula Avivamento",
    cor: "bg-blue-500",
    local: "Rua das Flores, 123",
    horario: '19:00',
    img: './img.jpg',
    lideres: ["João Silva", "Maria Souza"],
  },
  {
    nome: "Célula Esperança",
    cor: "bg-green-500",
    local: "Av. Central, 456",
    horario: '19:00',
    img: 'img.jpg',
    lideres: ["Carlos Oliveira", "Ana Lima"],
  },
  {
    nome: "Célula Esperança",
    cor: "bg-pink-500",
    local: "Av. Central, 456",
    horario: '19:00',
    img: 'img.jpg',
    lideres: ["Carlos Oliveira", "Ana Lima"],
  },
  {
    nome: "Célula Fé Viva",
    cor: "bg-yellow-500",
    local: "Praça da Paz, 789",
    horario: '19:00',
    img: 'img.jpg',
    lideres: ["Pedro Santos", "Juliana Costa"],
  },
];

function Connection() {
  const [searchTerm, setSearchTerm] = useState('');

  const normalizeString = (str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  const filteredCelulas = celulas.filter((celula) => {
    const normalizedSearchTerm = normalizeString(searchTerm);
    const normalizedCelulaNome = normalizeString(celula.nome);
    return normalizedCelulaNome.includes(normalizedSearchTerm);
  });

 return (
    <div className="min-h-screen p-7 flex flex-col mt-28 text-white">
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Células Disponíveis</h1>

        <input
          type="text"
          placeholder="Buscar célula..."
          className="w-full p-2 mb-6 text-white bg-transparent border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredCelulas.length > 0 ? (
          filteredCelulas.map((celula, index) => (
            <div
              key={index}
              className="flex flex-col my-10 shadow-lg rounded-xl border-yellow-500 shadow-zinc-800 animate__animated animate__bounceInRight"
            >
              <div>
                <img src={Img} alt="" className="my-2 rounded-md" />
              </div>
              <div className="pt-1 px-8 py-2 mb-6">
                <div className={`h-10 ${celula.cor} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                  {celula.nome}
                </div>
                <div className="p-4 text-white text-lg">
                  <div className="flex items-center gap-2">
                    <img src={IconLocalizacao} alt="Icone Localização" className="w-3 h-4" />
                    <p className="font-semibold">
                      Local: <span className="">{celula.local}</span>
                    </p>
                  </div>
                  {/* Horario e Dia */}
                  <div className="flex gap-10 mt-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <img src={IconCalendar} alt="Icone Localização" className="w-3 h-4" />
                        <p className="font-semibold">Quarta Feira</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <img src={IconRelogio} alt="Icone Localização" className="w-4 h-4" />
                        <p className="font-semibold">20h</p>
                      </div>
                    </div>
                  </div>
                  {/* <p className=" font-semibold">Líderes: <span className="">{celula.lideres.join(", ")}</span></p> */}
                  <div className="mt-4 flex gap-6">
                    <button className="bg-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-700">
                      Saiba Mais
                    </button>
                    <button className="bg-gray-300 text-gray-800 px-10 py-2 rounded-lg hover:bg-gray-400">
                      Contato
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
<div>
      <p className="text-center text-2xl text-red-500 animate__animated animate__bounceInRight">
        Nenhuma célula encontrada.
      </p>
    </div>
        )}
      </div>
    </div>
  );
}

export default Connection;