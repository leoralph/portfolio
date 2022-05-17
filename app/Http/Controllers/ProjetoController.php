<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjetoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            [
                'id' => 1,
                'nome' => 'Projeto 1',
                'descricao' => 'descrição do projeto 1',
                'tecnologias' => [
                    'PHP',
                    'React',
                    'Laravel'
                ],
                'repositorio' => 'https://github.com/leoralph/portfolio'
            ],
            [
                'id' => 2,
                'nome' => 'Projeto 2',
                'descricao' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur maxime voluptate cupiditate eveniet, ad consequatur, velit ratione tenetur vero doloremque placeat at natus asperiores minus voluptatibus voluptatum delectus eaque nostrum!',
                'tecnologias' => [
                    'C#',
                    '.NET'
                ],
                'repositorio' => 'https://github.com/leoralph/siest-proteauto'
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
