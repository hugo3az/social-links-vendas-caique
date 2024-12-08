import { Box, Button, Card, CardBody, CardHeader, Heading, Text, VStack, HStack, Divider } from '@chakra-ui/react';
import { Instagram, Phone } from 'lucide-react';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import droneAnimation from "../Components/Animacoes/BestSales.json"
import Lottie from 'lottie-react';
import FotoPerfil from "../img/perfil.jpg"

export default function ColorfulSocialLinks() {
    const socialLinks = [

        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            url: 'https://wa.me/5588933008874', // Número de telefone formatado
            description: 'WhatsApp - Vendas',
            color: '#25D366',
            hoverColor: '#1DA851',
        },

        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://instagram.com/caiquemagalulimoeiro',
            description: 'Veja meu Instagram',
            color: 'linear-gradient(to right, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040)',
            hoverColor: 'linear-gradient(to right, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040)',
        },
        {
            name: 'Contato',
            icon: Phone,
            url: 'tel:88933008874', // Número de telefone para a chamada
            description: 'Salve meu contato na sua agenda!',
            color: '#4CAF50',
            hoverColor: '#45a049',
        },
    ];

    return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bgImg={FotoPerfil} bgSize="cover" bgRepeat="no-repeat" bgPosition="center">
            <Card borderRadius="15px" maxW="md" w="full" mx="4" bg="whiteAlpha.700" backdropFilter="blur(8px)" boxShadow="lg">
                <CardHeader p={2} >
                    <HStack spacing={4} align="center">
                        <Box
                            as="figure"
                            w="120px"
                            h="120px"
                            border="2px solid white"
                            borderRadius="15px" // Bordas arredondadas
                            overflow="hidden"
                            shadow="lg"
                        >
                            <img
                                src={FotoPerfil}
                                alt="Seu Nome"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Box>
                        <Box>
                            <Heading size="lg" fontWeight="bold">{/* Nome em negrito */}
                                Caique Freitas
                            </Heading>
                            <Text fontSize="lg">{/* Subtítulo abaixo do nome */}
                             Vendedor Magalu | Limoeiro do Norte-CE
                            </Text>
                        </Box>
                    </HStack>
                </CardHeader>
                <Divider color="white"/>

                <CardBody>
                    <VStack spacing="4">
                        <VStack spacing={2} align="start">  {/* VStack para organizar um abaixo do outro */}
                            <Text fontSize="18px">
                                🎯 Ajudo você a encontrar os melhores produtos!
                                <Text>📦 Entrega rápida e segura</Text>
                                <Text>📲 Chama no WhatsApp para ofertas exclusivas</Text>
                            </Text>
                        </VStack>
                        <VStack spacing="4" w="full">
                            {socialLinks.map((link) => (
                                <Button
                                    key={link.name}
                                    w="full"
                                    color="white"
                                    bg={link.color}
                                    _hover={{
                                        bg: link.hoverColor,
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                                    }}
                                    transition="all 0.3s ease"
                                    onClick={() => window.open(link.url, '_blank')}
                                    py={6} // Increase padding to fit description text
                                    textAlign="left"
                                >
                                    <HStack align="center" spacing={4} w="full">
                                        <link.icon size="24" />
                                        <Box>
                                            <Text fontWeight="bold">{link.name}</Text>
                                            <Text fontSize="sm">{link.description}</Text>
                                        </Box>
                                        <Box position="absolute" right={-10} top={-5}> {/* Posiciona o drone */}
                                            <Lottie animationData={droneAnimation} loop={true} style={{ width: '60px', height: '80px' }} />
                                        </Box>
                                    </HStack>
                                </Button>
                            ))}
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    );
}
