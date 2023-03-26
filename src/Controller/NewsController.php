<?php

namespace App\Controller;

use App\Repository\ArticlesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NewsController extends AbstractController
{
    public function __construct(private ArticlesRepository $repository)
    {
    }

    #[Route('/news', name: 'app_news_list')]
    public function newsList(): Response
    {
        $news = $this->repository->findAll();

        return $this->render('news/list.html.twig', ['news' => $news]);
    }

    #[Route('/news/{articleId}', name: 'app_news_read')]
    public function readNews($articleId): Response
    {
        $article = $this->repository->find($articleId);

        return $this->render(
            'news/article.html.twig',
            ['title' => $article->getTitle(), 'text' => $article->getText()]
        );
    }
}
