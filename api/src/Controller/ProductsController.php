<?php

namespace App\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ProductsController extends AbstractController
{
    /**
     * @Route("/products/{id}", name="edit_product", methods={"PUT"})
     */
    public function editProduct(int $id, Request $request, EntityManagerInterface $entityManager): Response
    {
        $productRepository = $entityManager->getRepository(Product::class);

        $existingProduct = $productRepository->find($id);

        $data = json_decode($request->getContent(), true);

        if (!$existingProduct) {
            $product = new Product();
        } else {
            $product = $existingProduct;
        }

        $product->setName($data['name']);
        $product->setQuantity($data['quantity']);
        $product->setMinPrice($data['minPrice']);
        $product->setMaxPrice($data['maxPrice']);
        $product->setCategory($data['category']);
        $product->setDescription($data['description']);
        $product->setImage($data['image']);

        $entityManager->persist($product);
        $entityManager->flush();

        return new Response('Product saved/updated!', Response::HTTP_OK);
    }
}
