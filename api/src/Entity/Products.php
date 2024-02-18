<?php

namespace App\Entity;

use ApiPlatform\Metadata\GetCollection;
use App\Controller\ProductsController;
use App\Repository\ProductsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[GetCollection(
    name: 'products',
    uriTemplate: '/products',
    controller: ProductsController::class,
)]


#[ORM\Entity(repositoryClass: ProductsRepository::class)]
class Products
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $name = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?string $quantity = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?string $minPrice = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?string $maxPrice = null;

    #[ORM\Column(type: Types::INTEGER, scale: 1)]
    private ?string $category = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 10000, nullable: true)]
    private ?string $image = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(string $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getQuantity(): ?string
    {
        return $this->quantity;
    }

    public function setQuantity(?string $quantity): static
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getMinPrice(): ?string
    {
        return $this->minPrice;
    }

    public function setMinPrice(?string $minPrice): static
    {
        $this->minPrice = $minPrice;

        return $this;
    }

    public function getMaxPrice(): ?string
    {
        return $this->maxPrice;
    }

    public function setMaxPrice(?string $maxPrice): static
    {
        $this->maxPrice = $maxPrice;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): static
    {
        $this->category = $category;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }
}

