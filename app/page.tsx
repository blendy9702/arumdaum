"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { services, portfolio, news } from "@/lib/data";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Award,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AreumdaumExhibition() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // 모바일 메뉴가 열려있으면 닫기
    setIsMenuOpen(false);
  };

  const formatPhoneNumber = (value: string) => {
    // 숫자만 추출
    const numbers = value.replace(/[^\d]/g, "");

    // 최대 11자리로 제한
    const limitedNumbers = numbers.slice(0, 11);

    // 하이픈 추가
    if (limitedNumbers.length <= 3) {
      return limitedNumbers;
    } else if (limitedNumbers.length <= 7) {
      return `${limitedNumbers.slice(0, 3)}-${limitedNumbers.slice(3)}`;
    } else {
      return `${limitedNumbers.slice(0, 3)}-${limitedNumbers.slice(
        3,
        7
      )}-${limitedNumbers.slice(7)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='text-2xl font-bold text-gray-900'>
              ARUMDAUM
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-8'>
              <button
                onClick={() => scrollToSection("about")}
                className='text-gray-700 hover:text-gray-900 transition-colors cursor-pointer'
              >
                회사소개
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className='text-gray-700 hover:text-gray-900 transition-colors cursor-pointer'
              >
                서비스
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className='text-gray-700 hover:text-gray-900 transition-colors cursor-pointer'
              >
                포트폴리오
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className='text-gray-700 hover:text-gray-900 transition-colors cursor-pointer'
              >
                소식
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className='text-gray-700 hover:text-gray-900 transition-colors cursor-pointer'
              >
                문의
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav
            className={`md:hidden absolute left-0 right-0 bg-white border-b shadow-lg z-40 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-full pointer-events-none"
            }`}
          >
            <div className='py-4 px-4'>
              <div className='flex flex-col space-y-4'>
                <button
                  onClick={() => scrollToSection("about")}
                  className='text-gray-700 hover:text-gray-900 transition-colors cursor-pointer text-left'
                >
                  회사소개
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className='text-gray-700 hover:text-gray-900 transition-colors cursor-pointer text-left'
                >
                  서비스
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className='text-gray-700 hover:text-gray-900 transition-colors cursor-pointer text-left'
                >
                  포트폴리오
                </button>
                <button
                  onClick={() => scrollToSection("news")}
                  className='text-gray-700 hover:text-gray-900 transition-colors cursor-pointer text-left'
                >
                  소식
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className='text-gray-700 hover:text-gray-900 transition-colors cursor-pointer text-left'
                >
                  문의
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100'>
        <div className='absolute inset-0 bg-black/40'></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
        >
          <source
            src='/video/AQPdozh1mwP8EqlRpLU6P7g7o7igMuc4m1yiNR2AQaKdNjshB-r3dZGBws0dbZqlZiARWfWKhK-G7AdEfx2ynSrqkq5_4T5_J5snSpU.mp4'
            type='video/mp4'
          />
          브라우저가 비디오를 지원하지 않습니다.
        </video>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            예술과 만나는
            <br />
            특별한 순간
          </h1>
          <p className='text-xl md:text-2xl mb-8 opacity-90'>
            아름다움이 기획하는 감동적인 전시 경험
          </p>
          <Button
            size='lg'
            className='bg-white text-gray-900 hover:bg-gray-100'
            onClick={() => scrollToSection("portfolio")}
          >
            포트폴리오 보기
            <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>회사소개</h2>
            <p className='text-lg text-gray-600 mb-12 leading-relaxed'>
              아름다움은 2015년 설립된 전시회 기획 전문 회사로, 예술가와 관객을
              잇는 의미 있는 문화 공간을 만들어가고 있습니다. 창의적인 기획력과
              전문적인 큐레이팅을 통해 국내외 다양한 전시를 성공적으로
              진행해왔습니다.
            </p>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <Calendar className='h-8 w-8 text-gray-600' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>10년의 경험</h3>
                <p className='text-gray-600'>
                  2015년부터 축적된 전시 기획 노하우
                </p>
              </div>

              <div className='text-center'>
                <div className='bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <Users className='h-8 w-8 text-gray-600' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>100+ 작가</h3>
                <p className='text-gray-600'>함께 작업한 국내외 작가들</p>
              </div>

              <div className='text-center'>
                <div className='bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                  <Award className='h-8 w-8 text-gray-600' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>50+ 전시</h3>
                <p className='text-gray-600'>성공적으로 진행된 전시 프로젝트</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>서비스</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              전시 기획부터 실행까지, 아름다움의 전문적인 서비스를 만나보세요
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-shadow'
              >
                <CardContent className='p-6'>
                  <div className='text-4xl mb-4'>{service.icon}</div>
                  <h3 className='text-xl font-semibold mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600'>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id='portfolio' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>포트폴리오</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              아름다움이 기획한 다양한 전시들을 만나보세요
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {portfolio.map((item, index) => (
              <Card
                key={index}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='relative h-48'>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className='object-cover'
                  />
                </div>
                <CardContent className='p-6'>
                  <Badge variant='secondary' className='mb-2'>
                    {item.year}
                  </Badge>
                  <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                  <p className='text-gray-600 mb-1'>{item.artist}</p>
                  <p className='text-sm text-gray-500'>{item.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id='news' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>소식</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              아름다움의 최신 소식과 전시 정보를 확인하세요
            </p>
          </div>

          <div className='max-w-4xl mx-auto'>
            {news.map((item, index) => (
              <Card
                key={index}
                className='mb-6 hover:shadow-lg transition-shadow'
              >
                <CardContent className='p-6'>
                  <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <div className='flex items-center gap-3 mb-2 md:mb-0'>
                      <Badge variant='outline'>{item.category}</Badge>
                      <span className='text-sm text-gray-500'>{item.date}</span>
                    </div>
                  </div>
                  <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                  <p className='text-gray-600'>{item.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>문의</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              전시 기획에 대한 문의사항이 있으시면 언제든 연락주세요
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            {/* Contact Info */}
            <div>
              <h3 className='text-2xl font-semibold mb-6'>연락처 정보</h3>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <Phone className='h-5 w-5 text-gray-600' />
                  <span>02-1234-5678</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Mail className='h-5 w-5 text-gray-600' />
                  <span>info@areumdaum.co.kr</span>
                </div>
                <div className='flex items-center gap-3'>
                  <MapPin className='h-5 w-5 text-gray-600' />
                  <span>서울시 강남구 테헤란로 123, 아트빌딩 5층</span>
                </div>
              </div>

              <div className='mt-8'>
                <h4 className='text-lg font-semibold mb-4'>소셜 미디어</h4>
                <div className='flex gap-4'>
                  <Link
                    href='https://www.instagram.com/aleum_art/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button variant='outline' size='icon'>
                      <Instagram className='h-4 w-4' />
                    </Button>
                  </Link>
                  {/* <Button variant='outline' size='icon'>
                    <Facebook className='h-4 w-4' />
                  </Button>
                  <Button variant='outline' size='icon'>
                    <Youtube className='h-4 w-4' />
                  </Button> */}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-2xl font-semibold mb-6'>문의하기</h3>
                <form className='space-y-4'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium mb-2'>
                        이름
                      </label>
                      <Input placeholder='이름을 입력하세요' />
                    </div>
                    <div>
                      <label className='block text-sm font-medium mb-2'>
                        연락처
                      </label>
                      <Input
                        placeholder='010-1234-5678'
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        maxLength={13}
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      이메일
                    </label>
                    <Input type='email' placeholder='이메일을 입력하세요' />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      제목
                    </label>
                    <Input placeholder='문의 제목을 입력하세요' />
                  </div>
                  <div>
                    <label className='block text-sm font-medium mb-2'>
                      내용
                    </label>
                    <Textarea placeholder='문의 내용을 입력하세요' rows={5} />
                  </div>
                  <Button type='submit' className='w-full'>
                    문의 보내기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-bold mb-4'>아름다움</h3>
              <p className='text-gray-400 mb-4'>
                예술과 문화를 통해 아름다운 세상을 만들어가는 전시 기획 전문
                회사입니다.
              </p>
            </div>

            {/* <div>
              <h4 className='font-semibold mb-4'>서비스</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>전시 기획</li>
                <li>큐레이팅</li>
                <li>공간 연출</li>
                <li>아트 컨설팅</li>
              </ul>
            </div> */}

            {/* <div>
              <h4 className='font-semibold mb-4'>회사</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>회사소개</li>
                <li>채용정보</li>
                <li>파트너십</li>
                <li>개인정보처리방침</li>
              </ul>
            </div> */}

            <div>
              <h4 className='font-semibold mb-4'>연락처</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>02-1234-5678</li>
                <li>info@areumdaum.co.kr</li>
                <li>서울시 강남구 테헤란로 123</li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
            <p>&copy; 2025 아름다움. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
