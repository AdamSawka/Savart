<?php

namespace App\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ProductsController extends AbstractController
{
    private EntityManagerInterface $entityManager;
    private SerializerInterface $serializer;

    public function __construct(EntityManagerInterface $entityManager, SerializerInterface $serializer)
    {
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
    }

    #[Route('/products', name: 'getProducts', methods: ['GET'])]
    public function __invoke(): JsonResponse
    {
        $productsRepository = $this->entityManager->getRepository(Product::class);

        $products = $productsRepository->findAll();

        $data = $this->serialize($products, 'user:read');

        return new JsonResponse($data, JsonResponse::HTTP_OK);
    }

    private function serialize($data, $group): array
    {
        $context = [
            'groups' => $group,
        ];

        return $this->serializer->normalize($data, null, $context);
    }
}
