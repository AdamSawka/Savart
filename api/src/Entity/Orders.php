<?php

namespace App\Entity;

use App\Repository\OrdersRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrdersRepository::class)]
class Orders
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?string $idUser = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?string $idProduct = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?string $quantity = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?string $totalPrice = null;

    #[ORM\Column(length: 255)]
    private ?string $orderData = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(string $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getIdUser(): ?string
    {
        return $this->idUser;
    }

    public function setIdUser(string $idUser): static
    {
        $this->idUser = $idUser;

        return $this;
    }

    public function getIdProduct(): ?string
    {
        return $this->idProduct;
    }

    public function setIdProduct(string $idProduct): static
    {
        $this->idProduct = $idProduct;

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

    public function getTotalPrice(): ?string
    {
        return $this->totalPrice;
    }

    public function setTotalPrice(?string $totalPrice): static
    {
        $this->totalPrice = $totalPrice;

        return $this;
    }

    public function getOrderData(): ?string
    {
        return $this->orderData;
    }

    public function setOrderData(string $orderData): static
    {
        $this->orderData = $orderData;

        return $this;
    }
}
