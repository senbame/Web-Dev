from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category
# Create your views here.

# All List of Products
def product_list(request):
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')

    products = Product.objects.all()

    
    if min_price:
        products = products.filter(price__gte=min_price)

    if max_price:
        products = products.filter(price__lte=max_price)

    data = list(products.values())
    return JsonResponse(data, safe=False)


# One Product

def product_detail(request, id):
    p = Product.objects.get(id=id)

    data = {
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category": p.category.id
    }

    return JsonResponse(data)

# All Categories

def category_list(request):
    categories = Category.objects.all()
    data = []

    for c in categories:
        data.append({
            "id": c.id,
            "name": c.name
        })

    return JsonResponse(data, safe=False)

# One Category

def category_detail(request, id):
    c = Category.objects.get(id=id)

    data = {
        "id": c.id,
        "name": c.name
    }

    return JsonResponse(data)

# Products by Category

def products_by_category(request, id):
    products = Product.objects.filter(category_id=id)
    data = []

    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price
        })

    return JsonResponse(data, safe=False)



