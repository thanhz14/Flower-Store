from django.shortcuts import render

def home(request):
    return render(request, 'shop_flower/home.html')

def product_list(request):
    return render(request, 'shop_flower/product_list.html')

def product_detail(request):
    return render(request, 'shop_flower/product_detail.html')

def cart(request):
    return render(request, 'shop_flower/cart.html')
