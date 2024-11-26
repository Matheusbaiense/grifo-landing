// src/app/api/leads/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Log dos dados recebidos
    const body = await request.json();
    console.log('Dados recebidos:', body);

    // Fazer a requisição para a API FastAPI
    const response = await fetch('http://142.132.226.120:8000/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone,
        company: body.company,
        message: body.message,
      }),
    });

    // Log do status da resposta
    console.log('Status da resposta:', response.status);
    console.log('Headers da resposta:', Object.fromEntries(response.headers));

    // Tentar ler o corpo da resposta como texto primeiro
    const responseText = await response.text();
    console.log('Resposta bruta:', responseText);

    let data;
    try {
      // Tentar fazer o parse do JSON apenas se houver conteúdo
      data = responseText ? JSON.parse(responseText) : null;
    } catch (parseError) {
      console.error('Erro ao fazer parse da resposta:', parseError);
      // Se não for JSON válido, retornar o texto como mensagem de erro
      return NextResponse.json(
        { 
          message: 'Erro ao processar resposta da API', 
          detail: responseText 
        },
        { status: response.status }
      );
    }

    // Se a resposta não for ok, retornar erro
    if (!response.ok) {
      return NextResponse.json(
        { 
          message: data?.detail || data?.message || 'Erro ao enviar mensagem',
          detail: data
        },
        { status: response.status }
      );
    }

    // Sucesso
    return NextResponse.json(
      { 
        message: 'Mensagem enviada com sucesso!', 
        data 
      },
      { status: 201 }
    );

  } catch (error) {
    // Log do erro completo
    console.error('Erro completo:', error);

    return NextResponse.json(
      { 
        message: 'Erro interno do servidor',
        detail: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    );
  }
}