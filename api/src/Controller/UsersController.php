<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Product;
use Symfony\Component\Serializer\Annotation\Groups;

class UsersController extends AbstractController
{
    #[Groups(['user:write', 'user:read'])]
    private ?Product $users = null;


    #[Route('/users', name: "getUsers", methods: ['GET'])]
    public function __invoke(): Product
    {
        return $this->users;
    }
}
