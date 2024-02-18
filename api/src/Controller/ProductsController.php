<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Products;
use Symfony\Component\Serializer\Annotation\Groups;


class ProductsController extends AbstractController
{
    #[Groups(['user:write', 'user:read'])]
    private ?Products $products = null;

    /**
     * @Route("/products", name="products_index")
     */
    public function getProducts(): Products
    {
        return $this->products;
    }

}
