from django.http import HttpResponse
from django.shortcuts import render

def about_page(request):
    # return HttpResponse('About Page is created')
    return render(request, 'about_page.html')


def home_page(request):
    # return HttpResponse('Home Page is created')
    return render(request, 'home_page.html')
