import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
      <nav>
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
        >
          Produtos
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
        >
          Meus Pedidos
        </Link>
        <div
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { user.name }
        </div>
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </Link>
      </nav>
    </header>
  );
}

export default Header;