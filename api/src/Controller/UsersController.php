<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Products;
use Symfony\Component\Serializer\Annotation\Groups;

class UsersController extends AbstractController
{
    #[Groups(['user:write', 'user:read'])]
    private ?Products $users = null;


    #[Route('/users', name:"getUsers", methods: ['GET'])]

    public function __invoke(): Products
    {
        return $this->users;
    }
}
