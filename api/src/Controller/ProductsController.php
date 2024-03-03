<?php

namespace App\Controller;

use App\Exception\NotFoundException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Products;
use Symfony\Component\Serializer\Annotation\Groups;

class ProductsController extends AbstractController
{
    #[Groups(['user:write', 'user:read'])]
    private ?Products $products = null;
       $userPermissionsEditService;


    #[Route('/products', name:"getProducts", methods: ['GET'])]

     public function getProducts(Request $request): Response
     {
         try {
             $productsData = json_decode($request->getContent(), true);
             $this->userPermissionsEditService->editPermissions( $productsData);
             return new JsonResponse(['message' => 'ok']);
         } catch (NotFoundException $e) {
             return new JsonResponse(['message' => $e->getMessage()], Response::HTTP_NOT_FOUND);
         }
     }

}
