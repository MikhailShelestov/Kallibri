<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestJsonEndpointController extends AbstractController
{
    #[Route('/test/json/endpoint', name: 'app_test_json_endpoint')]
    public function index(): Response
    {
        $data = [
            'title' => 'Mega Title!',
            'text'=> 'lorem ipsum bla-bla-bla-bla-bla-bla-bla-bla-bla',
            'author' => 'Kek'
        ];

        return $this->json($data);
    }
}
